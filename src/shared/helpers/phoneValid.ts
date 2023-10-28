export function isPhoneValid(p:string) {
  var phoneRe = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
  var digits = p.replace(/\D/g, "");
  return phoneRe.test(digits);
}