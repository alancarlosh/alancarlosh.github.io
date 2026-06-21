# Alan Carlos Portfolio

Portafolio profesional desarrollado con HTML5, CSS3 y JavaScript Vanilla.

## Estructura

```text
.
├── assets/
│   ├── cv/
│   ├── favicons/
│   ├── icons/
│   ├── img/
│   └── logos/
├── css/
│   ├── accessibility.css
│   ├── base.css
│   ├── components.css
│   ├── layout.css
│   ├── reset.css
│   ├── responsive.css
│   ├── utilities.css
│   └── variables.css
├── js/
│   ├── filters.js
│   ├── main.js
│   └── utils.js
├── screenshots/
└── index.html
```

## Ejecución Local

No requiere instalación de dependencias.

```bash
python3 -m http.server 4173
```

Abrir:

```text
http://localhost:4173
```

## Arquitectura CSS

- `variables.css`: tokens globales del sistema visual.
- `reset.css`: normalización mínima del navegador.
- `base.css`: estilos base de elementos HTML.
- `layout.css`: estructura principal de página, secciones y grids.
- `components.css`: componentes reutilizables como botones, cards, filtros y tags.
- `utilities.css`: utilidades pequeñas y genéricas.
- `design-system.css`: contrato de componentes, variantes y aliases reutilizables.
- `accessibility.css`: focus visible, skip link y reduced motion.
- `responsive.css`: ajustes por breakpoint.
Las hojas CSS se enlazan directamente desde `index.html` para evitar cadenas bloqueantes con `@import`.

El orden de carga preserva la cascada:

```text
variables -> reset -> base -> layout -> components -> utilities -> accessibility -> responsive
```

## Arquitectura JavaScript

- `main.js`: inicializa los módulos del sitio.
- `filters.js`: controla filtros de proyectos y estados accesibles.
- `utils.js`: helpers reutilizables sin efectos secundarios.

Reglas:

- No usar variables globales.
- Mantener funciones pequeñas.
- Validar existencia de nodos antes de registrar eventos.
- No agregar librerías sin una necesidad real.

## Convenciones

- Archivos y carpetas en `kebab-case`.
- Clases CSS en `kebab-case`.
- Estados CSS con prefijo `is-`, por ejemplo `is-active` o `is-hidden`.
- Funciones JavaScript en `camelCase`.
- Constantes de módulo en `UPPER_SNAKE_CASE`.
- Data attributes descriptivos, por ejemplo `data-filter` y `data-tags`.

## Design System

Componentes oficiales:

- `button`: acción principal o secundaria.
- `card`: superficie reutilizable para profile, summary, project, tech y CV cards.
- `surface`: variante de superficie para estados muted, strong y elevated.
- `chip`: pieza compacta para filtros, badges y tags.
- `text-link`: enlace de texto con peso visual consistente.
- `section-header`: encabezado reutilizable de sección.
- `cluster`: agrupación horizontal flexible.

Variantes:

- `button--primary`
- `button--secondary`
- `surface--muted`
- `surface--strong`
- `surface--elevated`
- `chip--muted`

Estados:

- `is-active`
- `is-hidden`
- `[aria-pressed="true"]`
- `[aria-disabled="true"]`
- `:hover`
- `:focus-visible`

Las clases semánticas existentes, como `project-card`, `cv-card`, `filter` y `tag`, se mantienen como aliases de componentes del Design System.

## Accesibilidad

Todo cambio debe conservar:

- Navegación por teclado.
- `:focus-visible` claro.
- Estados interactivos con ARIA cuando aplique.
- Imágenes informativas con `alt`.
- Botones con `type`.
- Respeto por `prefers-reduced-motion`.

## Performance

Reglas actuales:

- Imágenes con dimensiones explícitas.
- WebP para la imagen principal con fallback PNG.
- JavaScript cargado como módulo.
- Evitar layout shift en contenido above-the-fold.

## Próximos Crecimientos

La estructura soporta agregar más adelante:

- más páginas,
- case studies,
- blog,
- internacionalización,
- dark mode,
- nuevos grupos de assets.

Esas capacidades no deben implementarse hasta que exista un requerimiento real.
