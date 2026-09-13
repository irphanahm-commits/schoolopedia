// Indian School Education Document Generator & Downloader
// Generates official-format CBSE board exam papers, marking schemes, formula sheets,
// chapter-wise MCQs with answer keys, and detailed solved Q&A.
// Supports direct browser Save as PDF (via window.print) and offline file downloads.

import {
  BoardExamPaper,
  ChapterMCQ,
  ChapterSolvedQuestion,
  ChapterStudyNotes,
  OfficialBoardRepository,
} from './indian-board-materials';

export function openPrintDocument(htmlContent: string, documentTitle: string) {
  try {
    const printWindow = window.open('', '_blank', 'width=950,height=850,menubar=no,toolbar=no,location=no,status=no');
    if (printWindow) {
      const htmlWithPrintScript = htmlContent.replace(
        '</body>',
        `<script>
          window.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
              try {
                window.focus();
                window.print();
              } catch (e) {
                console.warn('Auto-print triggered:', e);
              }
            }, 600);
          });
        </script></body>`
      );
      printWindow.document.open();
      printWindow.document.write(htmlWithPrintScript);
      printWindow.document.close();
      return;
    }
  } catch {
    // Popup blocked
  }

  // Guaranteed fallback if popup is blocked: directly download offline file
  downloadOfflineFile(`${documentTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}.html`, htmlContent, 'text/html');
}

export function downloadPaperDocument(htmlContent: string, documentTitle: string) {
  downloadOfflineFile(`${documentTitle.replace(/[^a-zA-Z0-9_-]/g, '_')}.html`, htmlContent, 'text/html');
}

export function downloadOfflineFile(filename: string, content: string, mimeType = 'text/html') {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const COMMON_CSS = `
  @page {
    size: A4;
    margin: 15mm 15mm 15mm 15mm;
  }
  * {
    box-sizing: border-box;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  body {
    font-family: 'Segoe UI', Arial, sans-serif;
    color: #0f172a;
    line-height: 1.5;
    margin: 0;
    padding: 20px;
    background-color: #f8fafc;
  }
  .print-page {
    background: #ffffff;
    max-width: 800px;
    margin: 0 auto;
    padding: 30px 40px;
    border: 1px solid #cbd5e1;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  @media print {
    body {
      background: #ffffff;
      padding: 0;
    }
    .print-page {
      max-width: 100%;
      border: none;
      box-shadow: none;
      padding: 0;
    }
    .no-print {
      display: none !important;
    }
  }
  .header-box {
    border-bottom: 2px solid #0f172a;
    padding-bottom: 12px;
    margin-bottom: 20px;
    text-align: center;
  }
  .roll-box {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #475569;
  }
  .boxes {
    display: inline-flex;
    gap: 3px;
  }
  .box-cell {
    width: 16px;
    height: 18px;
    border: 1px solid #64748b;
    display: inline-block;
  }
  .board-title {
    font-size: 16px;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #1e293b;
    margin: 4px 0;
  }
  .exam-title {
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    margin: 2px 0;
  }
  .subject-title {
    font-size: 20px;
    font-weight: 900;
    color: #0f172a;
    margin: 6px 0;
    text-transform: uppercase;
  }
  .meta-row {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    font-weight: 700;
    color: #1e293b;
    border-top: 1px solid #cbd5e1;
    border-bottom: 1px solid #cbd5e1;
    padding: 6px 0;
    margin-top: 10px;
  }
  .instructions-box {
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 10px 14px;
    font-size: 11px;
    margin-bottom: 20px;
  }
  .instructions-box h4 {
    margin: 0 0 4px 0;
    font-size: 12px;
    font-weight: 800;
  }
  .instructions-box ol {
    margin: 0;
    padding-left: 18px;
  }
  .section-header {
    background: #e2e8f0;
    padding: 4px 10px;
    font-size: 13px;
    font-weight: 800;
    margin: 18px 0 10px 0;
    border-left: 4px solid #3b82f6;
  }
  .question-item {
    margin-bottom: 14px;
    font-size: 12px;
    page-break-inside: avoid;
  }
  .question-head {
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    margin-bottom: 4px;
  }
  .q-number {
    color: #1e293b;
  }
  .q-marks {
    color: #475569;
    font-weight: 800;
  }
  .options-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px 16px;
    margin: 6px 0 8px 12px;
    font-size: 11.5px;
  }
  .solution-box {
    background: #f0fdf4;
    border: 1px solid #bbf7d0;
    border-left: 3px solid #16a34a;
    padding: 8px 12px;
    border-radius: 4px;
    margin-top: 6px;
    font-size: 11px;
  }
  .solution-title {
    font-weight: 800;
    color: #15803d;
    margin-bottom: 2px;
  }
  .marking-steps {
    list-style: none;
    padding-left: 0;
    margin: 4px 0;
    color: #166534;
  }
  .marking-steps li {
    padding-left: 14px;
    position: relative;
    margin-bottom: 2px;
  }
  .marking-steps li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: #15803d;
    font-weight: 800;
  }
  .examiner-alert {
    background: #fffbeb;
    border: 1px solid #fef3c7;
    border-left: 3px solid #f59e0b;
    padding: 6px 10px;
    border-radius: 4px;
    margin-top: 4px;
    font-size: 10.5px;
    color: #92400e;
  }
  .action-bar {
    position: sticky;
    top: 0;
    background: #0f172a;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .action-btn {
    background: #4f46e5;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .action-btn:hover {
    background: #4338ca;
  }
  .footer-note {
    text-align: center;
    font-size: 10px;
    color: #94a3b8;
    margin-top: 24px;
    border-top: 1px solid #e2e8f0;
    padding-top: 8px;
  }
`;

export function generatePaperHTML(
  paper: BoardExamPaper,
  classLabel: string,
  subjectName: string,
  boardCode: string,
  includeSolutions = true,
  medium: 'english' | 'hindi' = 'english'
): string {
  const isHindi = medium === 'hindi';
  const docTitle = `${classLabel} ${subjectName} ${paper.year} ${includeSolutions ? 'Solved Board Paper' : 'Question Paper'}`;

  const questionsHTML = paper.solvedQuestions
    .map((q) => {
      const qText = isHindi && q.questionTextHindi ? q.questionTextHindi : q.questionText;
      const opts = isHindi && q.optionsHindi ? q.optionsHindi : q.options;
      const sol = isHindi && q.detailedSolutionHindi ? q.detailedSolutionHindi : q.detailedSolution;

      return `
      <div class="question-item">
        <div class="question-head">
          <span class="q-number">Q${q.questionNumber}. [Section ${q.section}]</span>
          <span class="q-marks">[${q.marks} Mark${q.marks > 1 ? 's' : ''}]</span>
        </div>
        <div>${qText}</div>
        ${
          opts && opts.length > 0
            ? `
          <div class="options-grid">
            ${opts
              .map(
                (opt, idx) =>
                  `<div><strong>(${String.fromCharCode(65 + idx)})</strong> ${opt}</div>`
              )
              .join('')}
          </div>
        `
            : ''
        }
        ${
          includeSolutions
            ? `
          <div class="solution-box">
            <div class="solution-title">Official Marking Scheme & Model Answer:</div>
            ${
              q.correctOptionIndex !== undefined
                ? `<div style="font-weight: 700; color: #15803d; margin-bottom: 3px;">Correct Option: (${String.fromCharCode(
                    65 + q.correctOptionIndex
                  )})</div>`
                : ''
            }
            <div>${sol}</div>
            ${
              q.markingScheme && q.markingScheme.length > 0
                ? `
              <ul class="marking-steps">
                ${q.markingScheme.map((step) => `<li>${step}</li>`).join('')}
              </ul>
            `
                : ''
            }
            ${
              q.examinerTip
                ? `<div class="examiner-alert"><strong>CBSE Examiner Tip:</strong> ${q.examinerTip}</div>`
                : ''
            }
          </div>
        `
            : ''
        }
      </div>
    `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="${isHindi ? 'hi' : 'en'}">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} - Schoolopedia</title>
      <style>${COMMON_CSS}</style>
    </head>
    <body>
      <div class="action-bar no-print">
        <div>
          <strong>${docTitle}</strong> • Official CBSE Format
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="action-btn" style="background: #0284c7;" onclick="window.close()">✕ Close</button>
        </div>
      </div>

      <div class="print-page">
        <div class="roll-box">
          <div>Roll No.: <div class="boxes"><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span><span class="box-cell"></span></div></div>
          <div>Series / Code: ${boardCode} • Set: ${paper.set}</div>
        </div>

        <div class="header-box">
          <div class="board-title">Central Board of Secondary Education</div>
          <div class="exam-title">Secondary School Examination (${paper.year})</div>
          <div class="subject-title">${subjectName} (${classLabel})</div>
          <div>${includeSolutions ? 'OFFICIAL SOLVED EXAMINATION PAPER & STEP-WISE MARKING SCHEME' : 'OFFICIAL EXAMINATION QUESTION PAPER'}</div>
          <div class="meta-row">
            <span>Time Allowed: ${paper.timeHours} Hours</span>
            <span>Maximum Marks: ${paper.maxMarks}</span>
          </div>
        </div>

        <div class="instructions-box">
          <h4>General Instructions:</h4>
          <ol>
            ${paper.generalInstructions.map((inst) => `<li>${inst}</li>`).join('')}
          </ol>
        </div>

        <div>
          ${questionsHTML}
        </div>

        <div class="footer-note">
          Schoolopedia Open Educational Resource (OER) • Aligned with Official CBSE & NCERT Standards • https://schoolopedia.com
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateNotesHTML(
  notes: ChapterStudyNotes[],
  classLabel: string,
  subjectName: string,
  boardCode: string,
  medium: 'english' | 'hindi' = 'english'
): string {
  const isHindi = medium === 'hindi';
  const docTitle = `${classLabel} ${subjectName} Complete Chapter Revision Notes & Formulas`;

  const notesBody = notes
    .map((ch) => {
      const title = isHindi && ch.titleHindi ? ch.titleHindi : ch.titleEnglish;
      const summary = isHindi && ch.quickRevisionSummaryHindi ? ch.quickRevisionSummaryHindi : ch.quickRevisionSummary;

      return `
      <div style="margin-bottom: 24px; page-break-inside: avoid;">
        <h3 style="background: #eef2ff; border-left: 4px solid #4f46e5; padding: 6px 12px; margin: 12px 0 6px 0; font-size: 15px; color: #1e1b4b;">
          Chapter ${ch.chapterNumber}: ${title}
        </h3>
        <p style="font-size: 12px; color: #334155; margin: 4px 0 10px 0; line-height: 1.6;">${summary}</p>

        ${
          ch.coreFormulasAndLaws && ch.coreFormulasAndLaws.length > 0
            ? `
          <div style="margin-bottom: 10px;">
            <strong style="font-size: 12px; color: #0f172a;">Core Formulas & Scientific Laws:</strong>
            <table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-top: 4px;">
              <thead>
                <tr style="background: #f1f5f9; text-align: left;">
                  <th style="border: 1px solid #cbd5e1; padding: 4px 8px;">Law / Concept</th>
                  <th style="border: 1px solid #cbd5e1; padding: 4px 8px;">Formula / Statement</th>
                  <th style="border: 1px solid #cbd5e1; padding: 4px 8px;">Key Description</th>
                </tr>
              </thead>
              <tbody>
                ${ch.coreFormulasAndLaws
                  .map(
                    (f) => `
                  <tr>
                    <td style="border: 1px solid #cbd5e1; padding: 4px 8px; font-weight: 700;">${f.name}</td>
                    <td style="border: 1px solid #cbd5e1; padding: 4px 8px; font-family: monospace; color: #1e40af;">${f.formulaOrStatement}</td>
                    <td style="border: 1px solid #cbd5e1; padding: 4px 8px;">${f.explanation}</td>
                  </tr>
                `
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        `
            : ''
        }

        ${
          ch.keyDefinitions && ch.keyDefinitions.length > 0
            ? `
          <div style="margin-bottom: 10px;">
            <strong style="font-size: 12px; color: #0f172a;">Must-Know Board Definitions:</strong>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 4px;">
              ${ch.keyDefinitions
                .map(
                  (d) => `
                <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 4px; padding: 6px 8px; font-size: 11px;">
                  <span style="font-weight: 700; color: #0f172a;">${d.term}:</span> ${d.definition}
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `
            : ''
        }

        ${
          ch.cbseExaminerTips && ch.cbseExaminerTips.length > 0
            ? `
          <div style="background: #fffbeb; border-left: 3px solid #f59e0b; padding: 6px 10px; border-radius: 4px; font-size: 11px; color: #92400e;">
            <strong>CBSE Chief Examiner Scoring Tips:</strong>
            <ul style="margin: 2px 0 0 0; padding-left: 16px;">
              ${ch.cbseExaminerTips.map((tip) => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        `
            : ''
        }
      </div>
    `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="${isHindi ? 'hi' : 'en'}">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} - Schoolopedia</title>
      <style>${COMMON_CSS}</style>
    </head>
    <body>
      <div class="action-bar no-print">
        <div>
          <strong>${docTitle}</strong> • Comprehensive Formula Sheet & Notes
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="action-btn" style="background: #0284c7;" onclick="window.close()">✕ Close</button>
        </div>
      </div>

      <div class="print-page">
        <div class="header-box">
          <div class="board-title">Central Board of Secondary Education</div>
          <div class="subject-title">${subjectName} (${classLabel})</div>
          <div style="font-size: 14px; font-weight: 700; color: #4338ca;">CHAPTER-WISE REVISION NOTES, FORMULAS & EXAMINER TIPS</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Standard Code: ${boardCode} • Aligned with NCERT & NEP 2020</div>
        </div>

        <div>
          ${notesBody}
        </div>

        <div class="footer-note">
          Schoolopedia Open Educational Resource (OER) • Free for All Students Forever • https://schoolopedia.com
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateMCQsHTML(
  mcqs: ChapterMCQ[],
  classLabel: string,
  subjectName: string,
  boardCode: string,
  medium: 'english' | 'hindi' = 'english'
): string {
  const isHindi = medium === 'hindi';
  const docTitle = `${classLabel} ${subjectName} Chapter MCQs & Assertion-Reasoning Practice Paper`;

  const mcqsBody = mcqs
    .map((m, idx) => {
      const qText = isHindi && m.questionHindi ? m.questionHindi : m.question;
      const opts = isHindi && m.optionsHindi ? m.optionsHindi : m.options;
      const exp = isHindi && m.explanationHindi ? m.explanationHindi : m.explanation;

      return `
      <div class="question-item" style="border-bottom: 1px dashed #e2e8f0; padding-bottom: 10px;">
        <div class="question-head">
          <span>Q${idx + 1}. [${m.type.toUpperCase()}] ${m.askedInYear ? `(${m.askedInYear})` : ''}</span>
          <span>[${m.marks} Mark]</span>
        </div>
        ${m.casePassage ? `<div style="background: #f1f5f9; padding: 6px 10px; border-radius: 4px; font-style: italic; margin-bottom: 6px; font-size: 11px;">${m.casePassage}</div>` : ''}
        ${m.assertion ? `<div style="margin-bottom: 2px;"><strong>Assertion (A):</strong> ${m.assertion}</div>` : ''}
        ${m.reason ? `<div style="margin-bottom: 6px;"><strong>Reason (R):</strong> ${m.reason}</div>` : ''}
        <div>${qText}</div>
        <div class="options-grid">
          ${opts.map((opt, oIdx) => `<div><strong>(${String.fromCharCode(65 + oIdx)})</strong> ${opt}</div>`).join('')}
        </div>
        <div class="solution-box">
          <strong>Correct Option: (${String.fromCharCode(65 + m.correctOptionIndex)})</strong>
          <div style="margin-top: 2px;">${exp}</div>
        </div>
      </div>
    `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="${isHindi ? 'hi' : 'en'}">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} - Schoolopedia</title>
      <style>${COMMON_CSS}</style>
    </head>
    <body>
      <div class="action-bar no-print">
        <div>
          <strong>${docTitle}</strong> • Answer Key Included
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="action-btn" style="background: #0284c7;" onclick="window.close()">✕ Close</button>
        </div>
      </div>

      <div class="print-page">
        <div class="header-box">
          <div class="board-title">Central Board of Secondary Education</div>
          <div class="subject-title">${subjectName} (${classLabel})</div>
          <div style="font-size: 14px; font-weight: 700; color: #dc2626;">CHAPTER-WISE MCQs & ASSERTION-REASONING QUESTION BANK</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Standard Code: ${boardCode} • Total Questions: ${mcqs.length}</div>
        </div>

        <div>
          ${mcqsBody}
        </div>

        <div class="footer-note">
          Schoolopedia Open Educational Resource (OER) • Free for All Students Forever • https://schoolopedia.com
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateSolvedQAHTML(
  solvedQuestions: ChapterSolvedQuestion[],
  classLabel: string,
  subjectName: string,
  boardCode: string,
  medium: 'english' | 'hindi' = 'english'
): string {
  const isHindi = medium === 'hindi';
  const docTitle = `${classLabel} ${subjectName} Detailed Solved Board Questions & Answers`;

  const body = solvedQuestions
    .map((q, idx) => {
      const qText = isHindi && q.questionTextHindi ? q.questionTextHindi : q.questionText;
      const ans = isHindi && q.completeAnswerHindi ? q.completeAnswerHindi : q.completeAnswer;

      return `
      <div class="question-item" style="border-bottom: 1px solid #e2e8f0; padding-bottom: 14px;">
        <div class="question-head">
          <span>Q${idx + 1}. [${q.questionType}] ${q.askedInYears ? `(Board: ${q.askedInYears.join(', ')})` : ''}</span>
          <span>[${q.marks} Marks]</span>
        </div>
        <div style="font-weight: 600; color: #1e293b; margin-bottom: 6px;">${qText}</div>
        <div class="solution-box">
          <div class="solution-title">Model Answer:</div>
          <div style="white-space: pre-line; line-height: 1.6;">${ans}</div>
          ${
            q.stepWiseMarking && q.stepWiseMarking.length > 0
              ? `
            <div style="margin-top: 8px; font-weight: 700; color: #15803d;">Step-Wise Mark Allocation:</div>
            <ul class="marking-steps">
              ${q.stepWiseMarking.map((step) => `<li>${step}</li>`).join('')}
            </ul>
          `
              : ''
          }
          ${
            q.examinerAlert
              ? `<div class="examiner-alert"><strong>Examiner Alert:</strong> ${q.examinerAlert}</div>`
              : ''
          }
        </div>
      </div>
    `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="${isHindi ? 'hi' : 'en'}">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} - Schoolopedia</title>
      <style>${COMMON_CSS}</style>
    </head>
    <body>
      <div class="action-bar no-print">
        <div>
          <strong>${docTitle}</strong> • Step-by-Step Marking Allocations
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="action-btn" style="background: #0284c7;" onclick="window.close()">✕ Close</button>
        </div>
      </div>

      <div class="print-page">
        <div class="header-box">
          <div class="board-title">Central Board of Secondary Education</div>
          <div class="subject-title">${subjectName} (${classLabel})</div>
          <div style="font-size: 14px; font-weight: 700; color: #059669;">DETAILED SOLVED QUESTIONS (1, 2, 3 & 5 MARKS)</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Standard Code: ${boardCode} • With Step-Wise CBSE Marking Schemes</div>
        </div>

        <div>
          ${body}
        </div>

        <div class="footer-note">
          Schoolopedia Open Educational Resource (OER) • Free for All Students Forever • https://schoolopedia.com
        </div>
      </div>
    </body>
    </html>
  `;
}

export function generateOfficialRepositoriesDirectoryHTML(
  repositories: OfficialBoardRepository[],
  classLabel: string,
  subjectName: string
): string {
  const docTitle = `Official National Boards & Institutional Repositories Directory (${classLabel} ${subjectName})`;

  const reposHTML = repositories
    .map((repo) => {
      const linksHTML = repo.freeResources
        .map(
          (res) => `
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 10px; margin-bottom: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
              <div>
                <strong style="font-size: 12px; color: #0f172a;">${res.title}</strong>
                <div style="font-size: 11px; color: #475569; margin: 3px 0;">${res.description}</div>
                <div style="font-size: 10px; color: #64748b;">Classes Covered: <strong>${res.classesCovered}</strong></div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <span style="font-size: 9px; font-weight: 800; padding: 2px 6px; border-radius: 4px; background: #e0e7ff; color: #3730a3; text-transform: uppercase;">
                  ${res.format}
                </span>
                <div style="font-size: 10px; margin-top: 4px;">
                  <a href="${res.directDownloadUrl}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 700; text-decoration: underline;">
                    Open Portal ↗
                  </a>
                </div>
              </div>
            </div>
            <div style="font-size: 9.5px; color: #94a3b8; word-break: break-all; margin-top: 4px; font-family: monospace;">
              URL: ${res.directDownloadUrl}
            </div>
          </div>
        `
        )
        .join('');

      return `
        <div style="margin-bottom: 24px; border: 1.5px solid #cbd5e1; border-radius: 8px; padding: 16px; background: #ffffff; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 18px;">${repo.logoIcon}</span>
              <div>
                <div style="font-size: 14px; font-weight: 800; color: #0f172a;">${repo.name}</div>
                <div style="font-size: 10px; color: #64748b;">Official Website: <a href="${repo.officialWebsite}" target="_blank" style="color: #2563eb;">${repo.officialWebsite}</a></div>
              </div>
            </div>
            <span style="font-size: 9px; font-weight: 800; padding: 3px 8px; border-radius: 4px; background: #dcfce7; color: #166534; text-transform: uppercase;">
              ${repo.badge}
            </span>
          </div>
          <p style="font-size: 11px; color: #475569; margin: 0 0 12px 0;">${repo.description}</p>
          <div style="font-size: 11px; font-weight: 800; color: #334155; margin-bottom: 6px; text-transform: uppercase;">
            Verified Official & Free Download Links:
          </div>
          ${linksHTML}
        </div>
      `;
    })
    .join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${docTitle} - Schoolopedia</title>
      <style>${COMMON_CSS}</style>
    </head>
    <body>
      <div class="action-bar no-print">
        <div>
          <strong>${docTitle}</strong> • Verified Free Resources
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="action-btn" onclick="window.print()">🖨️ Print / Save as PDF</button>
          <button class="action-btn" style="background: #0284c7;" onclick="window.close()">✕ Close</button>
        </div>
      </div>

      <div class="print-page">
        <div class="header-box">
          <div class="board-title">Government of India & Recognized National Education Boards</div>
          <div class="subject-title">Official & Free Institutional Resource Directory</div>
          <div style="font-size: 13px; font-weight: 700; color: #4338ca;">CBSE Academic • NCERT • CISCE / ICSE • NIOS • KVS • NVS • DIKSHA</div>
          <div style="font-size: 11px; color: #64748b; margin-top: 4px;">Curated for ${classLabel} ${subjectName} Board Examination Preparation</div>
        </div>

        <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; padding: 12px; margin-bottom: 20px; font-size: 11px; color: #1e40af;">
          <strong>Student Notice:</strong> All resources listed below are published directly by the respective statutory boards and government institutions. They are 100% free of charge and legally distributed for student learning and examination practice under Open Educational Resource frameworks.
        </div>

        <div>
          ${reposHTML}
        </div>

        <div class="footer-note">
          Schoolopedia Open Educational Resource (OER) • Free for All Students Forever • https://schoolopedia.com
        </div>
      </div>
    </body>
    </html>
  `;
}

