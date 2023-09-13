export default function card({
    id,
    personal_info: {
        address,
        phone_number,
        zipcode,
    },
    employee_name,
    employee_salary,
    employee_age,
    image: {
      profile_image,
      description,
    }
}) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src='${profile_image}' alt='${description}' class='card-employee'/>
    <div class='employee-info'>
      <p class='employee-info-name'>${employee_name}</p>
      <p class='employee-info-age'>Age :${employee_age}</p>
      <p class='employee-info-salary'>Salary:💲${employee_salary}</p>
      <div class='employee-info-personal'>
        <p class='personal-info-address'>Addrss🏡:${address}</p>
        <p class='personal-info-phone'>Phone📞:${phone_number}</p>
        <p class='personal-info-zipcode'>zipcode: ${zipcode}</p>
      </div>
    </div>
  `
  return card;
}