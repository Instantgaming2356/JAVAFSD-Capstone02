package com.backend.backend.exceptions;

public class ResourceNotFound extends Exception {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public ResourceNotFound(String exMsg) {
        super(exMsg);
    }
}
