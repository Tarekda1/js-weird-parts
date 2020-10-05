//base class
var Job = function () {
    this.pays = true;
}

//prototype method
// Job.prototype.print = function () {
//     console.log(this.pays ? 'please hire me' : 'no thank you');
// }

//sub class
var TechJob = function (title, pays) {

    Job.call(this);

    this.title = title;
    this.pays = pays

    this.printTitle = function () {
        console.log(`title: ${this.title}`);
    }
}

TechJob.prototype = Object.create(Job.prototype);
TechJob.prototype.constructor = TechJob;

// TechJob.prototype.print = function () {
//     console.log(this.pays ? 'please hire me' : 'no thank you, i would learn js');
// }
// Object.prototype.print = function () {
//     console.log(this.pays ? 'hire me' : ' Iam a master');
// }


var itJob = new TechJob('IT', false);
//itJob.print();
itJob.printTitle();


