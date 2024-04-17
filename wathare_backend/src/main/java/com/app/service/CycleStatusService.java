package com.app.service;

import java.util.List;

import com.app.dto.CycleStatusDTO;

public interface CycleStatusService {

	List<CycleStatusDTO> getCycleStatusSortedByTsAsc();
	
		
}
