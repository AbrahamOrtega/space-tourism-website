export default interface CrewModel {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}
