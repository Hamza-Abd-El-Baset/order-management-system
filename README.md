# Order Management System

This project is an implementation of an Order Management System using NestJS, Prisma, and PostgreSQL.

## Setup

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```shell
   git clone <repository_url>
   cd order-management-system
   ```

2. Set up the environment variables:
Create a .env file in the root directory and add your PostgreSQL connection string:

```shell
DATABASE_URL="postgresql://user:password@db:5432/order_management"
```

3. Start the application using Docker Compose:

```shell
docker-compose up --build
```

4. Run Prisma migrations:

```shell
docker-compose exec app npx prisma migrate dev --name init
```

5. Generate Prisma client:

```shell
docker-compose exec app npx prisma generate
```

6. Access the API documentation:
Open your browser and navigate to http://localhost:3000/api/docs.
