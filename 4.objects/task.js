function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;
  }
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks) {
      this.marks.push(...marksToAdd);
    }
  }
  
  Student.prototype.getAverage = function() {
    if (!this.marks || this.marks.length === 0) {
      return 0;
    }
    const sum = this.marks.reduce((acc, cur) => acc + cur, 0);
    return sum / this.marks.length;
  }
  
  Student.prototype.exclude = function(reason) {
    delete this.subject;
    delete this.marks;
    this.excluded = reason;
  }
  
  const student1 = new Student('Иван', 'М', 20);
  const student2 = new Student('Мария', 'Ж', 19);
  
  student1.setSubject('Математика');
  student1.addMarks(4, 5, 3, 5);
  student1.exclude('Нарушение правил общежития');
  
  student2.setSubject('Физика');
  student2.addMarks(5, 5, 4, 4);
  
  console.log(student1);
  console.log(student2);
  console.log(student1.getAverage());
  console.log(student2.getAverage());
  