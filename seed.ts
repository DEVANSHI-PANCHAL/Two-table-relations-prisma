const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient();

const getWorkingPositions = async () => {
    try{
        const workingPositions = await prisma.workingPositions.findMany();
        console.log(workingPositions);
    }catch(err){
        console.log(err);
    }
}

const addWorkingPositions = async () => {
    try{
        const workingPositions = await prisma.workingPositions.create({
            data: {
                name: 'developer',
            },
        });
        console.log(workingPositions);
    }catch(err){
        console.log(err);
    }
}

const addEmployee = async () => {
    try{
        const employee = await prisma.Employees.create({
            data: {
                name: 'Devanshi',
                working_positions:{
                    connect:{ id: 1 },
                },
            },
        });
        console.log(employee);
    }catch(err){
        console.log(err);
    }
}

const getEmployees = async () => {
    try{
        const employees = await prisma.Employees.findMany({
                select:{ 
                    name: true,
                    working_positions: { select: {name: true}},
                }
            });
        console.dir(employees, {depth: null});
        
    }catch(err){
        console.log(err);
    }
}

const assignWorkingPosition = async () => {
    try{
        const employees = await prisma.Employees.update({
              where: { id : 1},

              data: { 
                  working_positions: {
                      connect: { id : 2 },
                  },
              },
              select: {name:true,working_positions : true}    
            });
        console.dir(employees, {depth: null}); 
    }catch(err){
        console.log(err);
    }

}

const unassignWorkingPosition = async () => {
    try{
        const employees = await prisma.Employees.update({
              where: { id : 1},

              data: { 
                  working_positions: {
                      disconnect: { id : 2 },
                  },
              },
              select: {name:true,working_positions : true}    
            });
        console.dir(employees, {depth: null}); 
    }catch(err){
        console.log(err);
    }

}

// getWorkingPositions();
// addEmployee();
// addWorkingPositions();
// getEmployees();
// assignWorkingPosition();
unassignWorkingPosition();