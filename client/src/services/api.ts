const URL = "/api/contacts";

export function fetchAllContacts(): Promise<AllContactResponse[]> {
  return fetch(`${URL}/all`)
    .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
    .then((res) => {
      return res.body;
    });
}

export function createContact(
  contact: AllContactResponse
): Promise<AllContactResponse> {
  return fetch(`${URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contact),
  })
    .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
    .then((res) => {
      return res.body;
    });
}

