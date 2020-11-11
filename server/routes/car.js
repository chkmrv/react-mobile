import carMock from '../model/car-page.json';

export function getCar(req, res) {
  res.json(carMock);
}
