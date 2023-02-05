const { getAllDoctorService, createDoctorService } = require("../services/doctor.service");

exports.getAllDoctor =async (req, res) => {
  try {
    const doctors =await getAllDoctorService();
    res.status(200).json({
      status: true,
      message: "successfull get",
      data: doctors,
    });
  } catch (error) {
    res.status(400).send({
      status: false,
      message: "Failed to get all doctors",
      error: error.message,
    });
  }
};

exports.createDoctors =async (req,res) =>{
    try {
        const result = await createDoctorService(req.body);
    
        res.status(200).json({
          status: true,
          message: 'Successfully create doctors',
          data: result,
        });
      } catch (error) {
        res.status(400).send({
          status: false,
          message: "Something went wrong",
          error: error.message,
        });
      }
}
