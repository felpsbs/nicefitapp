package br.com.nicefitapp.web.responses;

public class StandardResponse {

	private int status;
	private String message;

	public StandardResponse(int status, String message) {
		this.status = status;
		this.message = message;
	}

	public int getStatus() {
		return status;
	}

	public String getMessage() {
		return message;
	}

}
