import api from "@/http/axios";

export default class PhotoService {
  static getPhotos(albumId) {
    return api.get(`/photos?albumId=${albumId}`);
  }
}
