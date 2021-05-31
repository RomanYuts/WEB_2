class Performer extends BaseModel {
  constructor () {
    super('performers')
    this.fields = this.fields.concat(['name', 'experience', 'numbers_of_workers'])
  }
}
  