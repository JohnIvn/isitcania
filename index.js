export default function isItCania(Response) {
  Response = Response.toLowerCase();

  if (Response == "cania") {
    return true;
  }
  return false;
}
