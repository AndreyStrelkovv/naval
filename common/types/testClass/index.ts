export class TestCommonClass {
  test: string
  constructor() {
    this.test = "test"
  }

  get testClassGetter() {
    return "getterTest"
  }
}
