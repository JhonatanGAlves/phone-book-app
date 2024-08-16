const URL = "/api/contacts";

export function fetchAllContacts(): Promise<AllContactResponse[]> {
  return fetch(`${URL}/all`)
    .then((r) => r.json().then((data) => ({ status: r.status, body: data })))
    .then((res) => {
      return res.body;
    });
}
