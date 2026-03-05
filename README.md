# 📝 JavaScript Design Patterns & Creational Concepts

---

## Table of Contents

- [Overview](#overview)
- [Singleton Pattern](#singleton-pattern)
- [Prototype Pattern](#prototype-pattern)
- [Factory Pattern](#factory-pattern)
- [Builder Pattern](#builder-pattern)
- [Key Concepts Learned](#key-concepts-learned)
- [References](#references)

---

## Overview

This project contains a comprehensive summary of **JavaScript design patterns and key OOP concepts** that I have learned.  
It focuses on practical understanding and usage of **Singleton, Prototype, Factory, and Builder patterns**, along with other important concepts such as encapsulation, static properties, method chaining, and object cloning.

---

## Singleton Pattern

**Definition:**  
Singleton is a design pattern that ensures a class has **only one instance** and provides a global access point to that instance.

**Use Cases:**

- Database connections
- Logging utilities
- Global configuration management

**Benefits:**

- Reduces memory usage by maintaining a single instance
- Provides controlled access to a global resource
- Ensures consistent application state

---

## Prototype Pattern

**Definition:**  
Prototype is a design pattern used to **create new objects by cloning existing ones** instead of creating them from scratch.

**Use Cases:**

- When object creation is costly or complex
- To quickly generate multiple objects with similar properties
- Implementing copy or clone functionality

**Benefits:**

- Saves memory and processing time
- Enables object duplication without affecting the original
- Useful in applications where multiple similar objects are needed

---

## Factory Pattern

**Definition:**  
Factory Pattern provides an interface for creating objects **without specifying the exact class of the object**.

**Use Cases:**

- Creating objects of different types that share a common interface
- Encapsulating object creation logic
- Providing a single point to manage object creation

**Benefits:**

- Promotes loose coupling between client and object creation
- Simplifies code maintenance and readability
- Makes it easy to extend the system with new object types

---

## Builder Pattern

**Definition:**  
Builder Pattern is used to **construct complex objects step by step**, separating the construction process from the representation.

**Use Cases:**

- When objects have multiple optional attributes
- When construction involves multiple steps or configurations
- To hide internal implementation details from the client

**Benefits:**

- Provides clarity in building complex objects
- Enables method chaining for clean code
- Allows flexible creation of different object representations

---

## Key Concepts Learned

- **Static Properties:** Share data or methods across all instances of a class
- **Method Chaining:** Call multiple methods sequentially to configure objects
- **Encapsulation:** Hide internal details to protect object state and simplify usage
- **Clone / Copy:** Create independent duplicates of objects
- **Prototype Chain:** Share methods between objects efficiently

---

## References

- [JavaScript Design Patterns](https://refactoring.guru/design-patterns)
- [MDN JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [JavaScript Prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [Builder Pattern Overview](https://refactoring.guru/design-patterns/builder)
- [Factory Pattern Overview](https://refactoring.guru/design-patterns/factory-method)
- [Singleton Pattern Overview](https://refactoring.guru/design-patterns/singleton)

---

**Note:**  
These concepts and patterns provide a solid foundation for **writing clean, maintainable, and reusable JavaScript code**. Combining these patterns can help build **scalable and efficient applications**.

## Author

**Abanoub Maqqar**

- [LinkedIn](https://www.linkedin.com/in/abanoub-maqqar-4b7980236/)
- Email: abanoubMaqqar19@example.com
