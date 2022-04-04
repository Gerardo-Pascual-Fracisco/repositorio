const API = 'http://localhost:8000/api/category'
export const getTasks=async() => { 
    const res = await fetch(API)
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTask),
    });
    return await res.json();
  };
  
export const deleteTask = async (id_category) => {
    await fetch(`${API}/${id_category}`, {
      method: "DELETE",
    });
  };

  const Services = 'http://localhost:8000/api/service'
export const getServices=async() => { 
    const res = await fetch(Services)
    return await res.json()
}