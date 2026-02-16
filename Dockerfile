FROM node:24-alpine as base
RUN npm install --global pnpm
WORKDIR /app

# Install dependencies
FROM base as deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the project
FROM base as builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN pnpm run build

# Production runner
FROM base as runner
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod

EXPOSE 4321

# Important: --host 0.0.0.0 is required for Docker accessibility
CMD ["pnpm", "preview", "--host", "0.0.0.0"]