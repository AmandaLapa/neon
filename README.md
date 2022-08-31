
Um Start padrão para iniciar todos os projeto que forem ser usados em HTML puro

**Recomendado usar o Yarn para instalar as dependências e executar como administrador para que não ocorra nenhum erro de permissão.**

---

## Passos para executar o projeto

Start Project.

1. `sudo yarn`
2. `gulp`

---

- ## Include de HTML

### Exemplo

index.html

```html
<!DOCTYPE html>
<html>
  <body>
    <!-- Inserção de um código HTML  -->
    @@include('./view.html')
    <!-- Inserção de um código HTML passando valores para dentro do HTML  -->
    @@include('./var.html', { "name": "haoxin", "age":12345, "socials": { "fb":
    "facebook.com/include", "tw":"twitter.com/include" } })
  </body>
</html>
```

view.html

```html
<h1>view</h1>
```

var.html

```html
<label>@@name</label>
<label>@@age</label>
<strong>@@socials.fb</strong>
<strong>@@socials.tw</strong>
```

Resultado:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>view</h1>
    <label>haoxin</label>
    <label>12345</label>
    <strong>facebook.com/include</strong>
    <strong>twitter.com/include</strong>
  </body>
</html>
```