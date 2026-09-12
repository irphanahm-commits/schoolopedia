# Tier 1 Curriculum Matrix & Jurisdictional Standards

> **Canonical Reference**: This document defines the curriculum systems, standards authorities, framework identifiers, grade scales, and core subjects for Schoolopedia's Tier 1 countries.

---

## 1. Matrix Overview

| Country | Code | Primary Authority | Framework Name | Academic Structure | Core Entry Subjects |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **United States** | `US` | State Depts of Education (CDE, TEA, NYSED) | Common Core State Standards (CCSS) / State TEKS | Grades K–12 | Mathematics, Science, English Language Arts, Social Studies |
| **United Kingdom** | `GB` | Department for Education (DfE) / Ofqual | National Curriculum in England | Key Stages 1–4 (Years 1–11) & GCSEs | Mathematics, Science (Biology, Chemistry, Physics), English Language & Literature, History, Geography |
| **Canada** | `CA` | Provincial Ministries (Ontario MoE, BC MoE) | The Ontario Curriculum / BC Curriculum | Grades K–12 | Mathematics, Science, Language, Canadian History & Geography |
| **Australia** | `AU` | Australian Curriculum, Assessment and Reporting Authority (ACARA) | Australian Curriculum Version 9.0 | Foundation to Year 10 + Senior Years (11–12) | Mathematics, Science, English, HASS (Humanities and Social Sciences) |
| **New Zealand** | `NZ` | Ministry of Education (Te Tāhuhu o te Mātauranga) | The New Zealand Curriculum (NZC) | Curriculum Levels 1–8 (Years 1–13) & NCEA | Mathematics and Statistics, Science, English, Social Sciences |

---

## 2. Jurisdictional Deep Dives

### 2.1 United States (`US`)
* **California (`CA`)**:
  * Authority: California Department of Education (CDE)
  * Framework: California Common Core State Standards (CA-CCSS)
  * Mathematics: `CCSS.MATH.CONTENT.8.EE.C.7` (Grade 8 Linear Equations with rational coefficients)
  * Official Source: `https://www.cde.ca.gov/ci/ma/cf/`
* **Texas (`TX`)**:
  * Authority: Texas Education Agency (TEA)
  * Framework: Texas Essential Knowledge and Skills (TEKS)
  * Mathematics: `TEKS.MATH.8.8.C` (Model and solve one-variable equations with variables on both sides)
  * Official Source: `https://tea.texas.gov/academics/curriculum-standards/teks`
* **New York (`NY`)**:
  * Authority: New York State Education Department (NYSED)
  * Framework: Next Generation Mathematics Learning Standards
  * Mathematics: `NY-8.EE.7` (Solve linear equations in one variable)
  * Official Source: `http://www.nysed.gov/curriculum-instruction/next-generation-mathematics-learning-standards`

---

### 2.2 United Kingdom (`GB`)
* **England (`ENG`)**:
  * Authority: Department for Education (DfE) / Standards and Testing Agency
  * Framework: National Curriculum in England (Secondary)
  * Key Stage 3 (Years 7–9 / Age 11–14):
    * Algebra: *Solve linear equations in one unknown algebraically (including those with the unknown on both sides of the equation)*
    * Official Code: `UK.NC.KS3.MATH.ALG.04`
    * Official Source: `https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study`
  * Key Stage 4 (Years 10–11 / GCSE):
    * GCSE Mathematics (Edexcel / AQA / OCR aligned)

---

### 2.3 Canada (`CA`)
* **Ontario (`ON`)**:
  * Authority: Ontario Ministry of Education
  * Framework: The Ontario Curriculum: Mathematics (Grades 1–8 / Grade 9 De-streamed `MTH1W`)
  * Grade 8 Algebra Strand:
    * Expectation: *Solve equations that involve multiple terms, integers, and like terms on both sides of the equal sign*
    * Official Code: `ON.CURR.MATH.GR8.C2.3`
    * Official Source: `https://www.dcp.edu.gov.on.ca/en/curriculum/elementary-mathematics`

---

### 2.4 Australia (`AU`)
* **National / New South Wales (`NSW`)**:
  * Authority: ACARA / NSW Education Standards Authority (NESA)
  * Framework: Australian Curriculum Version 9.0 / NSW Syllabus
  * Year 8 Mathematics:
    * Content Description: *Solve linear equations with rational solutions using algebraic and graphical techniques*
    * Official Code: `AC9M8A03`
    * Official Source: `https://v9.australiancurriculum.edu.au/`

---

### 2.5 New Zealand (`NZ`)
* **National Curriculum (`NZ`)**:
  * Authority: Ministry of Education (New Zealand)
  * Framework: The New Zealand Curriculum (NZC)
  * Curriculum Level 4 / 5 (Years 8–10 / Ages 12–15):
    * Achievement Objective: *Form and solve linear equations with variables on one or both sides*
    * Official Code: `NZC.MATH.L5.PATTERNS.02`
    * Official Source: `https://nzcurriculum.tki.org.nz/`

---

## 3. URL Namespace Architecture

To accommodate all Tier 1 jurisdictions uniformly, URLs follow a deterministic, SEO-optimized hierarchy:

```text
/learn/{country}/{jurisdiction}/{grade}/{subject}/{lesson-slug}
```

### Examples:
- California: `/learn/us/california/grade-8/mathematics/linear-equations`
- Texas: `/learn/us/texas/grade-8/mathematics/linear-equations`
- England: `/learn/gb/england/year-8/mathematics/linear-equations`
- Ontario: `/learn/ca/ontario/grade-8/mathematics/linear-equations`
- Australia: `/learn/au/nsw/year-8/mathematics/linear-equations`
- New Zealand: `/learn/nz/national/level-5/mathematics/linear-equations`
