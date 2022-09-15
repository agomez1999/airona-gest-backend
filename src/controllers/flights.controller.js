const pool = require("../db");

// SELECT DISTINCT B.name NomClient, B.nPersones, C.flight_day DiaVol
// FROM client_flight A
// INNER JOIN clients B ON A.client_id = B.id
// INNER JOIN flights C ON A.flight_id = C.id

const getAllFlights = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT DATE_FORMAT(A.flight_day, '%Y-%m-%d') Dia, B.Nom NomGlobo FROM flights A INNER JOIN balloons B ON (A.balloon_id = B.id) ORDER BY flight_day DESC");
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllFlights };
