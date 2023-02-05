const Doctors = require("../models/Doctors");

exports.getAllDoctorService = () => {
  const doctors = Doctors.find({});
  return doctors;
};

exports.createDoctorService =async (data) =>{
    const result = Doctors.create(data)
    return result
}
