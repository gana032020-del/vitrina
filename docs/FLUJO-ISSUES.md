# Flujo de issues — Vitrina / Nanub

Dueño: Angel Nandi (@gana032020-del)

## Estados

| Etiqueta | Significado | Quién la pone |
|---|---|---|
| `triage` | Recién llegada | Action al abrir |
| `p0` | Bloquea caja o producción | Humano o Action si el texto lo dice |
| `p1` | Esta semana | Humano |
| `p2` | Puede esperar | Default |
| `caja` | Cobro / precio / factura / WhatsApp | Action o humano |
| `blocked` | Falta un dato | Humano |
| `ready` | Se puede ejecutar | Humano |

## Reglas

1. Toda issue nueva entra en `triage` y se asigna al dueño.
2. No se trabaja una issue con `triage` o `blocked`.
3. Una issue `p0` no convive con otra `p0` abierta en el mismo repo. Cierra o baja la anterior.
4. Cerrar exige un comentario con la prueba (qué se verificó).
5. El tablero de GitHub Projects #1 queda fuera de este Action: el conector no tiene permiso de Projects. El estado vive en etiquetas.

## Automatizaciones Grok

- Diario 09:00 America/Mexico_City: digest de issues abiertas en repos de producto.
- `label_change` en esos repos: si entra `ready` o `p0`, resume siguiente paso.
- `issue_comment`: si alguien pide trabajo, responde el criterio o marca `blocked`.
