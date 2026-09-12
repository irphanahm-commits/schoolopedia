import fs from 'fs';
import { execSync } from 'child_process';

const sql = fs.readFileSync('c:/xampp/htdocs/schoolopedia/seeds/0003_tier1_full_curriculum_catalogue.sql', 'utf8');
const stmts = sql.split(';').map(s => s.trim()).filter(s => s.length > 5 && !s.startsWith('--'));

for (let i = 0; i < stmts.length; i++) {
  const s = stmts[i];
  fs.writeFileSync('c:/xampp/htdocs/schoolopedia/scratch/temp.sql', s + ';');
  try {
    execSync('npx wrangler d1 execute schoolopedia-db --local --file=c:/xampp/htdocs/schoolopedia/scratch/temp.sql', {
      cwd: 'c:/xampp/htdocs/schoolopedia/workers/api',
      stdio: 'pipe'
    });
    console.log('OK statement ' + i + ': ' + s.substring(0, 40));
  } catch (err) {
    console.log('FAIL statement ' + i + ': ' + s.substring(0, 60));
    console.log(err.stderr ? err.stderr.toString() : err.message);
    break;
  }
}
