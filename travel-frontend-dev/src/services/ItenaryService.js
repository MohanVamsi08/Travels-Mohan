import apiClient from "./services";

// Get all iteneraries
const getAllIteneraries = async () => {
   return apiClient.get("iteneraries");
};

// Get a itenerarie by ID
const getItenerarieById = async (id) => {
  return apiClient.get("iteneraries/"+ id);
}

// Create a new itenerarie
const createItenerarie = async (itenerarie) => {
  return apiClient.post("iteneraries", itenerarie);
};

const updateItenerarie = async (itenerarie) => {
  return apiClient.put("iteneraries/" + itenerarie.itinerary_id, itenerarie);
};

const deleteItenerarie = async (id) => {
  return apiClient.delete("iteneraries/" + id);
};

// Add place to itenerary
const addPlaceToItinary = async (itineraryId, placeId) => {
  return apiClient.post(`/iteneraries/${itineraryId}/places/${placeId}`);
 };

export default {
  getAllIteneraries,
  getItenerarieById,
  createItenerarie,
  updateItenerarie,
  addPlaceToItinary,
  deleteItenerarie,
};
