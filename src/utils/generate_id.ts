export default function generateId() {
    const timestamp = new Date().getTime();
    const random = Math.random().toString(36).slice(2);
    return `${timestamp}-${random}`;
  }
  