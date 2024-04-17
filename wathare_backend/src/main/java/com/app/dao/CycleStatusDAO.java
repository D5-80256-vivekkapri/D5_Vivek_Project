package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.CycleStatus;



public interface CycleStatusDAO extends JpaRepository<CycleStatus, Integer>{

	List<CycleStatus> findAllByOrderByTsAsc();
	
	
}
