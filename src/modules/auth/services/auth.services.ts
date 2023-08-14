import { AsyncReturnType } from "core/types";
import { POST } from "core/utils/request";

export const login = async (body: {
  email: string;
  password: string;
}): AsyncReturnType<{ data: string }> => {
  return await POST("/api/login", body);
};
