package com.app.dto;

import java.time.LocalDateTime;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CycleStatusDTO {

	private Integer id;
	
	private LocalDateTime ts;
	
	private Integer machine_status;
	
	private Integer vibration;
	
	
}
