# 1️⃣ Base layer: install dependencies
FROM node:20-alpine AS dependencies

# Improve compatibility for some native modules
RUN apk add --no-cache libc6-compat

WORKDIR /home/app

# Copy only dependency files first for caching
COPY package.json yarn.lock* package-lock.json* ./

# Use Yarn as the package manager (preferred by Next.js)
RUN npm i -g yarn --force
RUN yarn install --frozen-lockfile

# 2️⃣ Builder layer: build the Next.js app
FROM node:20-alpine AS builder

WORKDIR /home/app

# Copy everything and reuse node_modules from dependencies
COPY --from=dependencies /home/app/node_modules ./node_modules
COPY . .

# Build the app (creates the standalone output)
RUN yarn build

# 3️⃣ Runner layer: production image
FROM node:20-alpine AS runner

WORKDIR /home/app

# Disable Next.js telemetry (optional)
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production
ENV PORT=3000

# Copy build output
COPY --from=builder /home/app/.next/standalone ./
COPY --from=builder /home/app/public ./public
COPY --from=builder /home/app/.next/static ./.next/static

EXPOSE 3000

# Start the app
CMD ["node", "server.js"]
