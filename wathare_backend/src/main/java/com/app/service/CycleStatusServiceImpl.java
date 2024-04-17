package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CycleStatusDAO;
import com.app.dto.CycleStatusDTO;
import com.app.entities.CycleStatus;

@Service
public class CycleStatusServiceImpl implements CycleStatusService{

	@Autowired
	private CycleStatusDAO cycleDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public List<CycleStatusDTO> getCycleStatusSortedByTsAsc() {
		List<CycleStatus> cycleList = cycleDao.findAllByOrderByTsAsc();
		return cycleList.stream()
				.map(cycle ->mapper.map(cycle, CycleStatusDTO.class))
				.collect(Collectors.toList());
	}

	
}
