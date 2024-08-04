# Projeto 1 - Pattern e Refatoração SOLID
## Objetivo:
Aplicar um padrão de projeto criacional, estrutural e um comportamental. Justifique o porque das escolhas em documentação que aponte, ainda, tres refatorações (use os princípios SOLID). Deve ser construido um script de teste, que garanta a consistencia das saídas esperadas após as alterações.

## Padrões de Projeto
### Factory (Criacional)
Facilita a criação de novos objetos sem especificar a classe (Formatters)

### Adapter (Estrutural)
Classes incompativeis podem trabalhar juntas com o adapter (Adaptar o formato CSV)

### Strategy (Comportamental)
Permite a definição de algoritmos que podem ser encapsulados (FormaterStrategy no CitiesReporter)

## Refatoração SOLID

### SRP (Single Responsibility Principle)
Separar a leitura e a conversão em classes diferentes (CSV Adapter cuida da leitura e Cities Reporter do relatório)
### OCP (Open/Closed Principle)
Permitir que receba novos tipos de formatadores sem mudar o código (com FormatterFactory)
### DIP (Dependency Inversion Principle)
Depende de abstrações (formaterStrategy e fileReader) que são abstratos e não um valor concreto
