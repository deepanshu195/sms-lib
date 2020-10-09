declare let response: {
    success: {
        SUCCESS: {
            status: number;
            message: string;
            data: {};
            success: boolean;
        };
    };
    error: {
        BAD_REQUEST: {
            status: number;
            message: string;
            error: string;
            success: boolean;
        };
        UNAUTHORIZED: {
            status: number;
            message: string;
            error: string;
            success: boolean;
        };
        NOT_FOUND: {
            status: number;
            message: string;
            error: string;
            success: boolean;
        };
        INTERNAL_ERROR: {
            status: number;
            message: string;
            error: string;
            success: boolean;
        };
    };
    mockedResponse: {
        failure: {
            status: number;
            message: string;
            error: string;
            success: boolean;
        };
    };
};
export default response;
//# sourceMappingURL=responseMessage.d.ts.map