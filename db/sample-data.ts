import fs from 'fs';
import path from 'path';

// 尝试读取真实文件，如果失败则使用空数据
let sampleData = { products: [] };

try {
  const filePath = path.join(process.cwd(), 'db', 'sample-data.json');
  const raw = fs.readFileSync(filePath, 'utf-8');
  sampleData = JSON.parse(raw);
  
  // 确保 products 存在且是数组
  if (!sampleData.products || !Array.isArray(sampleData.products)) {
    sampleData.products = [];
  }
} catch (error) {
  console.warn('Failed to load sample-data.json, using empty products array');
  // 保持 sampleData = { products: [] }
}

export default sampleData;