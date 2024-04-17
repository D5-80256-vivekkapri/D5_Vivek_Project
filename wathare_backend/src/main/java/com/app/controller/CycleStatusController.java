package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CycleStatusDTO;
import com.app.service.CycleStatusService;

@RestController
@RequestMapping("/cyclestatus")
@CrossOrigin(origins = "http://localhost:3000")
public class CycleStatusController {

	@Autowired
	private CycleStatusService cycleService;
	
		
	@GetMapping("/sortbyregisteredTs/asc")
	public ResponseEntity<List<CycleStatusDTO>> getCycleStatusSortedByTs(){
		List<CycleStatusDTO> cycle = cycleService.getCycleStatusSortedByTsAsc();
		return ResponseEntity.ok(cycle);
	}
}
