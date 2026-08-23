import { ENDPOINTS } from "#/common/endpoint";
import { apiClient } from "#/lib/request";
import { toast } from "@operonstudio/ui";
import { mutationOptions } from "@tanstack/react-query";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  token?: string;
  message?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
}

export const loginApi = async (data: LoginPayload): Promise<LoginResponse> => {
  return await apiClient.post<LoginResponse>(ENDPOINTS.AUTH.LOGIN, data);
};

export const registerApi = async (
  data: RegisterPayload,
): Promise<RegisterResponse> => {
  return await apiClient.post<RegisterResponse>(ENDPOINTS.AUTH.REGISTER, data);
};

export const loginMutationOptions = mutationOptions({
  mutationFn: async (data: LoginPayload) => loginApi(data),
  onSuccess: () => toast.success("Login Successful"),
  onError: (err: any) => toast.error(err?.message || "Failed to Login"),
});

export const registerMutationOptions = mutationOptions({
  mutationFn: async (data: RegisterPayload) => registerApi(data),
  onSuccess: () => toast.success("Register Successful"),
  onError: (err: any) => toast.error(err?.message || "Failed to Register"),
});
