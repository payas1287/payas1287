export const sil = (id) => ({
  tyepe: "DELETE",
  payload: id,
});

export const ekle = (todo) => ({
  type: "ADD",
  payload: todo,
});
