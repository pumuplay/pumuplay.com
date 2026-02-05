---
title: "เริ่มต้นใช้งานกับ Testcontainers"
description: "ทุกสิ่งที่คุณต้องรู้เพื่อเริ่มต้นใช้งาน Testcontainers สำหรับการทดสอบ Integration ที่เชื่อถือได้"
pubDate: 2026-02-05
heroImage: "https://testcontainers.com/getting-started/images/cn-arch-tc.png"
---

**Testcontainers** เป็นไลบรารีที่ให้บริการ API ที่ง่ายและเบาสำหรับการเตรียม Dependency ในการพัฒนาและทดสอบแบบ Local ด้วยบริการจริงที่ถูกห่อหุ้มใน Docker containers การใช้ Testcontainers ช่วยให้คุณเขียนชุดทดสอบที่พึ่งพาบริการเดียวกับที่คุณใช้บน Production ได้ โดยไม่ต้องใช้ Mock หรือ In-memory services

## Testcontainers แก้ปัญหาอะไร?

Infrastructure แบบ Cloud-native และ Microservices ทำให้การพัฒนาและทดสอบแบบ Local เป็นเรื่องท้าทาย แทนที่จะพึ่งพา Database แบบ In-memory หรือ Mock ซึ่งอาจทำงานต่างจากบริการจริงบน Production Testcontainers ช่วยให้คุณรัน Dependency ของแอปพลิเคชัน (เช่น Database, Message Broker ฯลฯ) ใน Docker containers ได้ ซึ่งช่วยให้การทดสอบมีความน่าเชื่อถือและทำซ้ำได้

## ประโยชน์ของการใช้ Testcontainers

*   **การเตรียม Infrastructure ที่แยกเป็นอิสระตามต้องการ:** ไม่จำเป็นต้องเตรียม Infrastructure สำหรับ Integration testing ไว้ล่วงหน้า
*   **ประสบการณ์ที่สม่ำเสมอ:** รัน Integration tests ได้โดยตรงจาก IDE ของคุณ
*   **การตั้งค่าการทดสอบที่เชื่อถือได้:** มี Wait strategies ในตัวเพื่อให้แน่ใจว่า Container ถูกเตรียมพร้อมสมบูรณ์แล้ว
*   **เครือข่ายขั้นสูง:** Map ports โดยอัตโนมัติและจัดการการสื่อสารระหว่าง Container
*   **การทำความสะอาดอัตโนมัติ:** ลบทรัพยากรหลังจากจบการทดสอบโดยใช้ Ryuk sidecar container

## ความแตกต่างกับ Docker และ Docker Compose

แม้ว่า Docker และ Docker Compose จะสามารถสร้าง Dependency ขึ้นมาได้ แต่บ่อยครั้งที่ต้องจัดการเรื่อง Port ชนกันและ Wait strategies ด้วยตัวเอง Testcontainers จัดการความซับซ้อนเหล่านี้ผ่านโปรแกรม มอบประสบการณ์ที่แข็งแกร่งและเป็นมิตรกับนักพัฒนามากกว่า

## ภาษาที่รองรับ

Testcontainers รองรับภาษาที่นิยมมากมาย รวมถึง:
*   Java
*   Go
*   .NET
*   Node.js
*   Python
*   Rust
*   ...และอื่นๆ

## Workflow ของ Testcontainers

1.  **ก่อนการทดสอบ:** เริ่มบริการที่จำเป็นในรูปแบบ Docker containers
2.  **ระหว่างการทดสอบ:** รันชุดทดสอบกับบริการที่อยู่ใน Container เหล่านั้น
3.  **หลังการทดสอบ:** Testcontainers จะทำลาย Container ให้โดยอัตโนมัติ

## ตัวอย่าง: การใช้ GenericContainer (Java)

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

## Modules ของ Testcontainers

สำหรับเทคโนโลยีทั่วไปเช่น PostgreSQL, Kafka, หรือ Elasticsearch Testcontainers มี Modules เฉพาะที่ช่วยลดความยุ่งยากในการตั้งค่า

```java
PostgreSQLContainer postgres = new PostgreSQLContainer("postgres:15");
postgres.start();
// Use helper methods
var jdbcUrl = postgres.getJdbcUrl();
postgres.stop();
```

## อะไรต่อจากนี้?

ลองดู [Guides](https://testcontainers.com/guides/) เพื่อลงมือทำจริง หรือสำรวจ [Modules](https://testcontainers.com/modules/) เพื่อย้ายชุดทดสอบเดิมของคุณมาใช้ Testcontainers

---
*อ้างอิง: [Testcontainers Getting Started](https://testcontainers.com/getting-started/)*
