# Principios SOLID

Al crear aplicaciones web modernas con Next.js, la adhesión a principios sólidos de diseño de software puede mejorar enormemente la capacidad de mantenimiento, la escalabilidad y la legibilidad del código. Los principios SOLID (Responsabilidad Única, Abierto/Cerrado, Sustitución de Liskov, Segregación de Interfaces e Inversión de Dependencias) ofrecen una guía clara para escribir mejor código. En esta explicación, exploraremos cada uno de estos principios con ejemplos en Next.js, destacando los errores más comunes y cómo evitarlos.

Los principios SOLID son un conjunto de cinco principios de diseño que buscan mejorar la calidad y mantenibilidad del código en el desarrollo de software orientado a objetos. El término SOLID es un acrónimo que representa los cinco principios clave, los cuales son

### S -> Single responsability principle / Principio de Responsabilidad Única

### O -> Open/closed principle / Principio de Abierto/Cerrado

### L -> Liscov substitution principle / Principio de Sustitución de Liskov

### I -> Interface segregation principle / Principio de Segregación de Interfaces

### D -> Dependency inversion principle / Principio de Inversión de Dependencia

### S -> page.tsx 
### O -> Button.tsx
### L -> Button.tsx
### I -> [id] page.tsx
### D -> [id] page.tsx