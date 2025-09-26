interface Response<T> {
  status: number;
  message: string;
  data: T;
  timestamp: string;
}

export default Response;
