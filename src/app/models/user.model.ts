export class User{
  private firstName: string;
  private lastName: string;
  private jobTitle: string;
  private imagePath: string;

  constructor(firstName: string, lastName: string, jobTitle: string, imagePath: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.jobTitle = jobTitle;
    this.imagePath = imagePath;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  getJobTitle(): string {
    return this.jobTitle;
  }

  setJobTitle(jobTitle: string): void {
    this.jobTitle = jobTitle;
  }

  getImagePath(): string {
    return this.imagePath;
  }

  setImagePath(imagePath: string): void {
    this.imagePath = imagePath;
  }
}
