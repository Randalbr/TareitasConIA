# Evaluación Técnica - Estiven Chavarría

## 🎯 **Prueba Realizada**: Prueba #1 - To-Do List Inteligente con IA

### 📋 **Criterios Generales (Aplican a todas las pruebas)**

#### ✅ Requisitos Obligatorios
- [x] **Ejecución en navegador**: La aplicación funciona completamente en un navegador web
- [x] **Integración de IA**: Incluye modelo de IA (Google Gemini 1.5 Flash)
- [x] **Código comentado**: El código está debidamente comentado
- [x] **Lenguaje de programación**: Node.js + React con buena estructura y organización
- [x] **Documentación README.md**: Incluye instrucciones de uso e instalación
- [x] **Repositorio GIT público**: Debe estar en repositorio público con colaborador `hmdelgado@almacontactcol.co`

#### 🔍 Criterios de Evaluación
- [x] **Porcentaje de código propio vs IA**: Código personalizado bien estructurado, tiene un porcentaje alto de código generado con IA
- [x] **Conocimientos aplicados**: Demuestra conocimientos técnicos propios en Node.js y React

---

## 🎯 **Prueba #1: To-Do List Inteligente con IA**

### 📝 **Funcionalidades Básicas Requeridas**
- [x] Añadir nuevas tareas
- [x] Editar tareas existentes
- [x] Eliminar tareas
- [x] Marcar tareas como completadas
- [ ] Persistencia de datos (en memoria del servidor, debia ser LOCALSTORAGE)

### 🤖 **Integración de IA (Obligatoria)**

#### 1. Análisis de Productividad
- [x] Botón "Dame un consejito" funcional
- [x] Envío de lista de tareas al modelo de IA
- [x] Prompt correcto implementado: "Analiza esta lista de tareas y da un consejo motivacional breve: [LISTA_TAREAS]"
- [x] Respuesta de IA mostrada al usuario (usando alert)

#### 2. Clasificación Automática
- [ ] Al añadir tarea, envío automático a IA para sugerir categoría (Estaba en los criterios de aceptación)
- [ ] Categoría sugerida aplicada automáticamente (Estaba en los criterios de aceptación)

#### 3. Estimación de Tiempo
- [x] Botón de estimación de tiempo para tarea seleccionada
- [x] Envío de tarea específica a IA
- [x] Prompt implementado: "¿Cuánto tiempo suele llevar esta actividad? Responde breve en minutos u horas. Actividad: [TAREA]"
- [x] Respuesta de IA mostrada al usuario

### 🎨 **Criterios de UX/UI**
- [x] Interfaz intuitiva y funcional
- [x] Feedback visual claro para todas las acciones
- [x] Manejo de estados de carga durante llamadas a IA
- [x] Diseño simple pero efectivo
- [x] Botones con emojis para mejor experiencia de usuario

### 🔧 **Tecnologías Utilizadas**
- **Backend**: Node.js + Express
- **Frontend**: React 19.1.1 + Vite
- **IA**: Google Generative AI (Gemini 1.5 Flash)
- **Estado**: React Hooks (useState, useEffect)
- **Persistencia**: Memoria del servidor (array en memoria)
- **HTTP**: Fetch API
- **Arquitectura**: Separación clara entre frontend y backend

---

## 📝 **Notas del Evaluador**

### **Fortalezas Identificadas:**
- ✅ Implementación de funcionalidades básicas de CRUD
- ✅ Integración exitosa con Google Gemini API
- ✅ Código bien estructurado y comentado
- ✅ Arquitectura separada frontend/backend
- ✅ Uso de API de IA alternativa (Gemini)
- ✅ Manejo de errores básico
- ✅ Documentación clara de instalación

### **Áreas de Mejora:**
- ⚠️ **Falta persistencia de datos**: Las tareas se pierden al reiniciar el servidor
- ⚠️ **Falta clasificación automática**: No implementa sugerencia de categorías por IA
- ⚠️ **UI básica**: Interfaz funcional pero sin estilos avanzados
- ⚠️ **Manejo de errores**: Solo usa alerts básicos
- ⚠️ **No incluye tests**: No hay testing automatizado

### **Comentarios Adicionales:**
Estiven Chavarría demostró buenos conocimientos de Node.js y React, implementando la Prueba #1 con una arquitectura sólida separando frontend y backend. 
La integración con Google Gemini es innovadora y funciona correctamente. 
Sin embargo, faltan algunas funcionalidades obligatorias como la clasificación automática y la persistencia de datos. 
El código está bien comentado y estructurado, mostrando buenas prácticas de desarrollo.

### **Comentario personal:**
Tienes mucho potencial y espero que sigas estudiando; tienes muy buenos conceptos técnicos, intenta que la IA no haga más de lo que deberías hacer tú por tu propia cuenta; 
la idea de estos retos técnicos es evaluar a la persona implementando IA, no usando la IA para realizar sus tareas. 
Te deseo mil éxitos y mucha suerte en este proceso.

---

## 🔗 **Información de Contacto**

**Evaluador**: hmdelgado@almacontactcol.co  
**Candidato**: Estiven Chavarría  
**Prueba**: To-Do List Inteligente con IA  

---
