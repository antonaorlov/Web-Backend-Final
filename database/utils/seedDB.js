const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Anton",
		lastname: "Orlov",
		department: "Student"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Bob",
		lastname: "Raden"
	});

	const dummyTask = await Task.create({
		description: "Make a website",
		priority_level: "High",
		completion: "Done"
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;