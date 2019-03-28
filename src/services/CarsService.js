export default class CarsService {
  async getResourse(url) {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}`);
    }
    return await res.json();
  }
  async getCars() {
    return await this.getResourse(
      "https://sheetsu.com/apis/v1.0su/2435449d1e20"
    );
  }
}
