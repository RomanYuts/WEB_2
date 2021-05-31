class Project_in_progress extends BaseModel {
  constructor () {
    super('projects_in_progress')
    this.fields = this.fields.concat(['project', 'performer', 'begin_date', 'end_date'])
  }
}
