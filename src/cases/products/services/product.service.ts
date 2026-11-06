import { api } from "@/lib/axios";
import type { ProductDTO } from "../dtos/product.dto";

const ENDPOINT = "/products";

export const ProductService = {
  async listAll(): Promise<ProductDTO[]> {
    const result = await api.get<ProductDTO[]>(ENDPOINT);
    return result.data;
  },

  async findOne(id: string): Promise<ProductDTO> {
    const result = await api.get<ProductDTO>(`${ENDPOINT}/${id}`);
    return result.data;
  },
};