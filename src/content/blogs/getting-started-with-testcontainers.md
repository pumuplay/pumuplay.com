---
title: "Getting Started with Testcontainers"
description: "Everything you need to know to get started with Testcontainers for reliable integration testing."
pubDate: 2026-02-05
heroImage: "https://testcontainers.com/getting-started/images/test-workflow.png"
---

**Testcontainers** is a library that provides easy and lightweight APIs for bootstrapping local development and test dependencies with real services wrapped in Docker containers. Using Testcontainers, you can write tests that depend on the same services you use in production without mocks or in-memory services.

## What problems does Testcontainers solve?

Cloud-native infrastructure and microservices have made local development and testing challenging. Instead of relying on in-memory databases or mocks, which may behave differently from production services, Testcontainers allows you to run your application dependencies (databases, message brokers, etc.) in Docker containers. This ensures reliable and repeatable tests.

## Benefits of using Testcontainers

*   **On-demand isolated infrastructure provisioning:** No need for pre-provisioned integration testing infrastructure.
*   **Consistent experience:** Run integration tests directly from your IDE.
*   **Reliable test setup:** Built-in wait strategies ensure containers are fully initialized.
*   **Advanced networking:** Automatically maps ports and handles container communication.
*   **Automatic clean up:** Removes resources after test execution using the Ryuk sidecar container.

## Differences with Docker and Docker Compose

While Docker and Docker Compose can spin up dependencies, they often require manual management of port conflicts and wait strategies. Testcontainers handles these complexities programmatically, providing a more robust and developer-friendly experience.

## Supported languages

Testcontainers supports many popular languages, including:
*   Java
*   Go
*   .NET
*   Node.js
*   Python
*   Rust
*   ...and more.

## Testcontainers Workflow

1.  **Before Test:** Start required services as Docker containers.
2.  **During Test:** Run tests against these containerized services.
3.  **After Test:** Testcontainers automatically destroys the containers.

## Example: Using GenericContainer (Java)

```java
GenericContainer container = new GenericContainer("postgres:15")
        .withExposedPorts(5432)
        .waitingFor(new LogMessageWaitStrategy()
            .withRegEx(".*database system is ready to accept connections.*\\s")
            .withTimes(2)
            .withStartupTimeout(Duration.of(60, ChronoUnit.SECONDS)));
container.start();
// Perform DB operations
container.stop();
```

## Testcontainers Modules

For common technologies like PostgreSQL, Kafka, or Elasticsearch, Testcontainers provides dedicated modules that simplify configuration.

```java
PostgreSQLContainer postgres = new PostgreSQLContainer("postgres:15");
postgres.start();
// Use helper methods
var jdbcUrl = postgres.getJdbcUrl();
postgres.stop();
```

## What's Next?

Check out the [Guides](https://testcontainers.com/guides/) for hands-on experience or explore the [Modules](https://testcontainers.com/modules/) to migrate your existing tests.

---
*Reference: [Testcontainers Getting Started](https://testcontainers.com/getting-started/)*
